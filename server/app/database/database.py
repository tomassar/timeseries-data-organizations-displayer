from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database


DATABASE_URL = "postgresql://postgres:password@localhost/bloomalert"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def create_database_if_not_exists():
    if not database_exists(engine.url):
        create_database(engine.url)
        print("Database created successfully")
    else:
        print("Database already exists")

create_database_if_not_exists()