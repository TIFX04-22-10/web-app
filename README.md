# Run the project

You need to install three packages on your machine:

* Node.js: The JavaScript runtime that you will use to run your front-end project.
* Yarn: A package and project manager for Node.js applications.
* Python: A recent Python 3 interpreter to run the Flask backend on.

## Create a virtual environment

Go to folder `api`. Then do the commands:

### For Unix

```
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install flask python-dotenv
```

### For Windows

```
$ python -m venv venv
$ venv\Scripts\activate
(venv) $ pip install flask python-dotenv
```

## Available Scripts

### Start front-end

```
yarn start
```

### In a second terminal window, start Flask back-end

#### For Unix

```
yarn uni-start-api
```

#### For Windows

```
yarn win-start-api
```

## Credits

This repo is based on the tutorial: <https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project>
