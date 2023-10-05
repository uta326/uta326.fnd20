# Book Review Management App

This application is a recording app for reading impressions. It is a precious moment to hear an impression of a book from kids throughout their development. Sometimes we encounter new thoughts.
Another important role of developing this application is to learn how to develop a web application with modern technologies.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- Node.js: [Installation Guide](https://nodejs.org/)
- Python and Django: [Installation Guide](https://www.djangoproject.com/download/)
- PostgreSQL: [Installation Guide](https://www.postgresql.org/download/)

The application was developed using Windows 11, WSL2, and Docker for Windows.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

   ```sh
   $ git clone https://github.com/uta326/uta326.fnd20.git
   $ cd /uta326.fnd20/WebSystem

2. Create .env file
   Add this information.
   A file name should be ".env".
      .env file needs to be put on: Websystem/backend
   ```sh
   SECRET_KEY=<Your Key>
   DEBUG=True
   POSTGRES_ENGINE=django.db.backends.postgresql_psycopg2
   POSTGRES_NAME=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASS=postgres
   POSTGRES_HOST=db
   POSTGRES_PORT=5432
   ```

3. Place top.png on Websystem/webapp/public
   This image will be displayed on the top page.


4. Build
   ```sh
      /Websystem $ docker-compose build --no-cache
   ```

5. Create containers
   ```sh
      /Websystem $ docker-compose up
   ```

6. Migration for Django
   Currently, you cannot access localhost:3000 because next.js can not fetch data from a backend server.
   So you need to execute migration commands to run a system.
   ```sh
      /Websystem $ docker-compose exec backend python manage.py makemigrations

                     Migrations for 'account':
                     /usr/local/lib/python3.9/site-packages/allauth/account/migrations/0003_auto_20231005_1545.py
                        - Alter field id on emailaddress
                        - Alter field id on emailconfirmation
                     Migrations for 'socialaccount':
                     /usr/local/lib/python3.9/site-packages/allauth/socialaccount/migrations/0004_auto_20231005_1545.py
                        - Alter field id on socialaccount
                        - Alter field id on socialapp
                        - Alter field id on socialtoken
   ```
   
   ```sh
      /Websystem $ docker-compose exec backend python manage.py migrate
                     Operations to perform:
                     Apply all migrations: account, accounts, admin, auth, authtoken, contenttypes, products, sessions, sites, socialaccount
                     Running migrations:
                     Applying contenttypes.0001_initial... OK
                     Applying contenttypes.0002_remove_content_type_name... OK
                     Applying auth.0001_initial... OK
                     Applying auth.0002_alter_permission_name_max_length... OK
                     Applying auth.0003_alter_user_email_max_length... OK
                     Applying auth.0004_alter_user_username_opts... OK
                     Applying auth.0005_alter_user_last_login_null... OK
                     Applying auth.0006_require_contenttypes_0002... OK
                     Applying auth.0007_alter_validators_add_error_messages... OK
                     Applying auth.0008_alter_user_username_max_length... OK
                     Applying auth.0009_alter_user_last_name_max_length... OK
                     Applying auth.0010_alter_group_name_max_length... OK
                     Applying auth.0011_update_proxy_permissions... OK
                     Applying auth.0012_alter_user_first_name_max_length... OK
                     Applying accounts.0001_initial... OK
                     Applying account.0001_initial... OK
                     Applying account.0002_email_max_length... OK
                     Applying account.0003_auto_20231005_1545... OK
                     Applying admin.0001_initial... OK
                     Applying admin.0002_logentry_remove_auto_add... OK
                     Applying admin.0003_logentry_add_action_flag_choices... OK
                     Applying authtoken.0001_initial... OK
                     Applying authtoken.0002_auto_20160226_1747... OK
                     Applying products.0001_initial... OK
                     Applying products.0002_auto_20230927_0946... OK
                     Applying products.0003_post_finished_date... OK
                     Applying products.0004_post_updated_at... OK
                     Applying products.0005_alter_post_finished_date... OK
                     Applying sessions.0001_initial... OK
                     Applying sites.0001_initial... OK
                     Applying sites.0002_alter_domain_unique... OK
                     Applying socialaccount.0001_initial... OK
                     Applying socialaccount.0002_token_max_lengths... OK
                     Applying socialaccount.0003_extra_data_default_dict... OK
                     Applying socialaccount.0004_auto_20231005_1545... OK
   ```

7. Get static data
   ```sh
   /Websystem $ docker-compose exec backend python manage.py collectstatic

                  You have requested to collect static files at the destination
                  location as specified in your settings:

                  /app/backend/static

                  This will overwrite existing files!
                  Are you sure you want to do this?

                  Type 'yes' to continue, or 'no' to cancel: yes

                  161 static files copied to '/app/backend/static'.
   ```

8. Create an admin user account for django
   ```sh
   /Websystem $ docker-compose exec backend python manage.py createsuperuser
   ```



## Usage
1. Lets Access a web site

   ```sh
   /Websystem $ docker-compose down
   /Websystem $ docker-compose up
   ```
   Frontend: http://localhost:3000/

   django admin: http://localhost:8000/admin/

   django Rest API, POST: http://localhost:8000/api/post/

   django Rest API POST Detail: http://localhost:8000/api/post/[key]/

   pgAdmin4: http://localhost:8888/

2. Data registration
   - Access django admin page: http://localhost:8000/admin/
   - Login with your ID and password
   - You can add data using Posts table.
     fill contents: Book name, author name, contents and so on.
     This site may help you: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site

3. Create settings of pgAdmin4
   - Access pgAdmin4: http://localhost:8888/
   - Input Email Address / Username and Password.
   - You can find these two information in docker-compose.yaml.
      ```.yaml
      
      pgadmin4:
      container_name: websystem_pgadmin4
      image: dpage/pgadmin4
      ports:
         - "127.0.0.1:8888:80"
      volumes:
         - pgadmin4_data:/var/lib/pgadmin
      environment:
         PGADMIN_DEFAULT_EMAIL: root@gmail.com <UserID>
         PGADMIN_DEFAULT_PASSWORD: password <User PassWord>
      hostname: pgadmin4
      depends_on:
         - db
      networks:
         app_net:
         #ipv4_address: 172.18.0.3
      ```

