from os import path
from pathlib import Path

from flask import Flask, render_template
from flask_frozen import Freezer

import subprocess
__build__ = subprocess.check_output(
              'git describe --tags --always HEAD'.split() ).decode().strip()
from datetime import datetime
now = datetime.now()
datetime_tag = now.strftime("%Y-%m-%dT%H:%M:%SZ")
datetime_str = now.strftime("%d/%m/%Y, %H:%M:%S")


template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)
#app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
freezer = Freezer(app)

@app.cli.command()
def freeze():
    freezer.freeze()

@app.cli.command()
def serve():
    freezer.run()

@app.route('/')
def index():
    return render_template('pages/index.html',
                           __build__=__build__)

@app.route('/<page>')
def pages(page):
    return render_template('pages/software.html',
                           __build__=__build__, datetime_str=datetime_str, datetime_tag=datetime_tag )

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=8080)
