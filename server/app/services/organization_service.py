import csv
import os
from sqlalchemy.orm import Session
from app.database.database import SessionLocal
from app.models.models import Organization

def read_organizations_csv():
    file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'organization_and_zones_dataset.csv')
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        organizations = list(reader)
    return organizations

def read_organizations():
    db = SessionLocal()
    organizations = db.query(Organization).all()
    db.close()
    return organizations
