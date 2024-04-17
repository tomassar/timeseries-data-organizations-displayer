import csv
import os

def read_timeseries(org_id):
    # Adjust the file path to point to the correct location of your CSV file
    file_path = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'timeseries_dataset.csv')
    with open(file_path, 'r') as file:
        reader = csv.DictReader(file)
        timeseries = [row for row in reader if row['organization'] == org_id]
    return timeseries
