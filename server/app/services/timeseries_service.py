import csv
import os
from app.database.database import SessionLocal
from app.models.models import TimeSeries

def read_timeseries_csv(org_id):
    file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'timeseries_dataset.csv')
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        timeseries = [row for row in reader if row['organization'] == org_id]
    return timeseries

def read_timeseries(org_id):
    db = SessionLocal()
    timeseries = db.query(TimeSeries).filter(TimeSeries.organization == org_id).all()
    db.close()
    return timeseries