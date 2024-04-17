This project is a full-stack application that leverages FastAPI for the backend and React with Vite for the frontend.

## Things that should be improved, but due to a lack of time could'nt be done
- Separate react components in a more intuitive way
- Don't directly use fetch. Instead abstract away all the external api calls using Axios
- In the backend, create a separate controller, instead of creating the endpoints in the main.py file
- The Chart is not that good looking, more improvements can definitely be done
- The UI in general is not the most UX friendly. Although is not that ugly, it could be much better.
- The table is not mobile responsive.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Python 3.7 or later.
- You have installed pip, the Python package installer.
- You have installed Node.js and npm (Node Package Manager).

## Installing the Backend

### Step 1: Clone the Repository

First, clone the repository to your local machine:

### Step 2: Install Dependencies

Next, install the required Python packages using pip and venv:

```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Step 3: Set Up the Database

Ensure you have PostgreSQL installed and running. The automatically creates the database and seeds it with the .CSV files data at boot time.

Update the `DATABASE_URL` in your `.env` file with your database credentials.

### Step 4: Run the Backend
First you need to go to the server folder:
```
cd server
```
You can start the FastAPI server using Uvicorn:
```
bash uvicorn app.main:app --reload
```
The `--reload` flag enables hot reloading, which means the server will automatically update whenever you make changes to your code.

## Installing the Frontend

### Step 1: Install Dependencies

Navigate to the frontend directory and install the necessary Node.js packages:
```
bash cd frontend npm install
```
### Step 2: Run the Frontend

You can start the Vite development server with:
```
npm run start
```
Tthis command starts the development server and opens your application in a web browser.

## Accessing the Application

Once both the backend and frontend are running, you can access the application by opening a web browser and navigating to `http://localhost:5173` (or the port specified by Vite).

# Images
![image](https://github.com/tomassar/timeseries-data-organizations-displayer/assets/71415654/66d2cbe0-9c98-46a4-a648-e37909684b7e)
![image](https://github.com/tomassar/timeseries-data-organizations-displayer/assets/71415654/5fe43f14-b2d5-4346-8a3e-cf9a7307387b)

### Database tables
![image](https://github.com/tomassar/timeseries-data-organizations-displayer/assets/71415654/b9f425d0-d2d6-424c-90f3-30b7e3d74bf5)
![image](https://github.com/tomassar/timeseries-data-organizations-displayer/assets/71415654/bd77ac9b-6e42-48eb-95f8-9b03925ab765)


