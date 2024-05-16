# YESQL
![main logo](./frontend/assets/yesql_logo.png)

Welcome to YeSQL! This application allows you to connect your own PostgreSQL database and optimize your SQL select queries by rendering your database into an interactive entity-relationship diagram (ERD) and testing your results for speed and accuracy. With the confidence that comes from visualizing your entire database and the connections between tables, you will now be able to intuitively craft queries that return precisely the data you need without slowing down your process, and you can copy that query directly into your own codebase. 

## Getting Started

To get started, fork and clone this repository and run “npm install.” 

Start the server by running “npm run build." This should open your browser to localhost.com and you'll see our lovely landing page.

![landing page](./frontend/assets/landing_page_readme.png) 

If you have a local PostgreSQL database on your machine, ensure your database is running, and then add your connection credentials. 
![local connection](./frontend/assets/local_connection_login_screenshot_readme.png)

Alternatively, you can connect via a URI string. 
![hosted connection](./frontend/assets/hosted_connection_login_screenshot_readme.png)

Once you have submitted your database connection information, you’ll see a beautiful visualization of your database. Have fun dragging the tables around and checking out the relationships between them!
![full screen of ERD and query builder](./frontend/assets/fullshot_screenshot_readme.png)

Above your database entity relationship diagram is your query builder. As you click each column to select within a table, this will populate in real time.
![query builder](./frontend/assets/your_query_screenshot_readme.png)

If you select columns from separate tables, you'll trigger the option to create a join, along with an explanation of the join table types. 
![join table text](./frontend/assets/join_screenshot_readme.png)

Select your join type of choice and our join builder will help you construct exactly what you need.
![join selection modal](./frontend/assets/join_selection_screenshot_readme.png)

Once you select, you'll see your join has been added to your query!
![updated query builder with join](./frontend/assets/join_added_to_query_screenshot_readme.png)

Feel free to remove columns from your query simply by clicking on them again. Once your query looks the way you want, you're ready to click "Test"!

When you see the "Results" button bounce, your query result is ready. Click that button and check out your query result. If it looks the way you want, congrats! Just click that clipboard to copy the query string and paste it into your code. 

## How to Contribute


## Contributor Information





