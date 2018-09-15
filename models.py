from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)

    def __repr__(self):
        return self.name


class Word(db.Model):
    __tablename__ = 'words'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'),
                            nullable=False)
    category = db.relationship('Category', foreign_keys='Word.category_id',
                               backref=db.backref('words', lazy=True))

    @staticmethod
    def get_all():
        return Word.query.order_by(Word.id).all()

    @staticmethod
    def get_by_category():
        words = Word.get_all()
        # todo: currently index.html expects exactly three categories,
        # but we might want to change this.
        subjects = []
        verbs = []
        predicates = []
        for word in words:
            if word.category.name == 'subject':
                subjects.append(word)
            elif word.category.name == 'verb':
                verbs.append(word)
            elif word.category.name == 'predicate':
                predicates.append(word)
        return subjects, verbs, predicates

    def __repr__(self):
        return self.name
