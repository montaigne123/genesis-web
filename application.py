from flask import Flask
from flask import Response,render_template
from flask_cors import CORS, cross_origin
import time
import json
import datetime
import os
from flask_restful import Resource, Api

application = app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 300

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/login")
def login():
    return render_template('login.html')

@app.route("/signup")
def signup():
    return render_template('signup.html')

@app.route("/analytics")
def analytics():
    return render_template('analytics.html')

@app.route("/paidmarketing")
def paidmarketing():
    return render_template('paidmarketing.html')

@app.route("/seo")
def seo():
    return render_template('seo.html')


# No cacheing at all for API endpoints.
@app.after_request
def add_header(response):
    # response.cache_control.no_store = True
    if 'Cache-Control' not in response.headers:
        response.headers['Cache-Control'] = 'no-store'
    return response
 
if __name__ == "__main__":
	app.jinja_env.auto_reload = True
	app.config['TEMPLATES_AUTO_RELOAD'] = True
	app.run(debug=True,host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
