from flask import Flask
from flask import render_template
from models import db, Word
from config import Config
import os
app = Flask(__name__)
app.config.from_object(os.environ.get('APP_SETTINGS', Config))
db.init_app(app)


@app.route("/")
def words():
    subjects, verbs, predicates = Word.get_by_category()
    return render_template('index.html', subjects=subjects, verbs=verbs,
                           predicates=predicates)


@app.route("/add", methods=['GET', 'POST'])
def add():
    return ''
