import os, shutil
from flask import Flask, flash, request, redirect, url_for, send_file, send_from_directory, abort
from PIL import Image
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'upload'
OUTPUT_FOLDER = 'output'
ALLOWED_EXTENSIONS = {'mp4', 'avi', 'npy'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER

def extractFrames(inGif, outFolder):
    frame = Image.open(inGif)
    nframes = 0
    while frame:
        frame.save( '%s/%s-%s.png' % (outFolder, 'output', nframes ) , 'PNG')
        nframes += 1
        try:
            frame.seek( nframes )
        except EOFError:
            break;
    return True

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/get-image/<int:image_number>')
def get_image(image_number):
    try:
        return send_from_directory(app.config['OUTPUT_FOLDER'], path='output-'+str(image_number)+'.png', as_attachment=True)
    except FileNotFoundError:
        abort(404)

@app.route('/api/upload', methods = ['POST'])
def onFileUpload():
    file = request.files['file']
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            extractFrames('runner3.gif', 'output')
            #return redirect(url_for('download_file', name=filename))
    return "done"

@app.route("/delete", methods=['POST'])
def empty_folder():
    for filename in os.listdir(app.config['OUTPUT_FOLDER']):
        file_path = os.path.join(app.config['OUTPUT_FOLDER'], filename)
        try:
            if os.path.isfile(file_path) or os.path.islink(file_path):
                os.unlink(file_path)
            elif os.path.isdir(file_path):
                shutil.rmtree(file_path)
        except Exception as e:
            print('Failed to delete %s. Reason: %s' % (file_path, e))
    return redirect(request.referrer)