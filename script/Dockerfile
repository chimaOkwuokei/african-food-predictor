FROM python:3.8-slim-buster

RUN apt update -y && apt install awscli -y

#so basicaly what i'm deploying is everything that relates to the app.py

WORKDIR /app

COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt


EXPOSE 8080

# CMD ["python3", "app.py"]
# Use Gunicorn to run the Flask app
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]