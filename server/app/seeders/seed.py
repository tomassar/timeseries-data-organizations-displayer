import csv
from app.database.database import SessionLocal
from app.models.models import Organization, TimeSeries
import os

def seed_data():
    db = SessionLocal()

    if db.query(Organization).count() == 0:
        file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'organization_and_zones_dataset.csv')
        with open(file_path, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                print("row here", row)
                org = Organization(**row)
                db.add(org)
                db.commit()

    if db.query(TimeSeries).count() == 0:
        file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'timeseries_dataset.csv')
        with open(file_path, 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                row['value'] = None if row['value'] == '' else float(row['value'])
                ts = TimeSeries(**row)
                db.add(ts)
                db.commit()

    db.close()