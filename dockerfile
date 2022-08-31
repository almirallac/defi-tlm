FROM python:3.9.13-buster

ENV PYTHONUNBUFFERED=1
WORKDIR /django
COPY ./requirements.txt /django/requirements.txt
RUN pip install -r requirements.txt
COPY . /django

# Add docker-compose-wait tool -------------------
# Reference https://www.datanovia.com/en/lessons/docker-compose-wait-for-container-using-wait-tool/docker-compose-wait-for-mysql-container-to-be-ready/
ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait





