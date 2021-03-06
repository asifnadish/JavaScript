from flask import Flask, render_template,request, session
from flask_session import Session
from flask_socketio import SocketIO, emit
import os
app=Flask(__name__)
app.config["SECRET_KEY"]=os.getenv("SECRET_KEY")
socketio=SocketIO(app)

@app.route("/")
def index():
    return render_template('intro.html')

@socketio.on("submit vote")
def vote(data):
    selection=data["selection"]
    emit("announce vote",{'selection':selected}, broadcast=True)

