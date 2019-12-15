FROM python:slim

COPY . /app

WORKDIR /app

RUN pip install -r requirements.txt

RUN mkdir -p /app/uploads
ENV FLASK_APP=app.py
ENV FLASK_ENV=development

CMD ["flask", "run", "--host=0.0.0.0"]