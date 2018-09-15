import os


class Config(object):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL',
                                             "postgresql://wordblocks:wordblocks@localhost/wordblocks_dev")

# class DevelopmentConfig(Config):    
#     SQLALCHEMY_TRACK_MODIFICATIONS = True
