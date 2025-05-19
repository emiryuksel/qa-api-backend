# Question-Answer API Backend

A Node.js + Express RESTful API backend for a question-answer platform. Features user registration, JWT-based authentication, question and answer posting, password reset via email, and more.

---

## 🚀 Live Demo

> The frontend is currently under development and will be available soon.  
> In the meantime, you can explore and test the API using Postman or any REST client.

---

## 🛠️ Technologies Used

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **MongoDB & Mongoose** – Database & ODM
- **JWT (JSON Web Token)** – Authentication system
- **NodeMailer** – Email handling
- **dotenv** – Environment variable management
- **Postman** – API testing

---

## ⚙️ Configuration – `config.env`

Environment variables are stored in `config/env/config.env`. Use the provided `env.example` as a template.

---

## 📄 Example `config.env`

#### Server
PORT=5000
NODE_ENV=development

#### MongoDB
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

#### JWT
JWT_SECRET_KEY=your_jwt_secret_key
JWT_EXPIRE=10m
JWT_COOKIE=10

### Password Reset Token Expiry (in ms)
RESET_PASSWORD_EXPIRE=3600000

### Email (SMTP) Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_specific_password

---

## 📝 Creating `config.env` from `env.example`

To quickly set up your environment variables:

cp env.example config/env/config.env

Then, edit `config/env/config.env` with your MongoDB and SMTP credentials.

---

## 🗄️ MongoDB URI Setup

If you're using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), follow these steps:

1. Create a free cluster and a database user.
2. Whitelist your IP address in Atlas settings.
3. Use the following URI structure:


mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority


For example:


mongodb+srv://admin:myPassword123@cluster0.abcde.mongodb.net/qa-platform?retryWrites=true&w=majority


> Replace `<username>`, `<password>`, `<cluster>`, and `<dbname>` with your actual MongoDB credentials.

---


## 📦 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**


git clone https://github.com/your-username/qa-api-backend.git
cd qa-api-backend


2. **Install dependencies**


npm install


3. **Configure environment variables**

- Copy `env.example` to `config/env/config.env` (see above).
- Update `config.env` with your MongoDB URI, JWT secret, and SMTP credentials.

4. **Run the server**

npm run dev

> Ensure `nodemon` is installed globally (`npm install -g nodemon`) or as a dev dependency.

---

## 🧪 API Testing (via Postman)

Test endpoints using Postman or any API client.

🔗 **Base URL (local)**: `http://localhost:5000/api`

### ✨ Example Routes

#### ✅ Auth
| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| POST   | `/auth/register`     | Register a new user        |
| POST   | `/auth/login`        | Login and receive JWT      |
| GET    | `/auth/logout`       | Logout user                |

#### ❓ Questions
| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| POST   | `/questions`         | Create new question        |
| GET    | `/questions`         | Get all questions          |
| GET    | `/questions/:id`     | Get single question        |
| DELETE | `/questions/:id`     | Delete a question          |

#### 💬 Answers
| Method | Endpoint                      | Description                |
|--------|-------------------------------|----------------------------|
| POST   | `/questions/:id/answers`      | Answer a question          |
| DELETE | `/questions/:id/answers/:aid` | Delete an answer           |

> **Note**: Protected routes require a JWT token in the `Authorization: Bearer <token>` header.

---

## 📫 Contact

Maintained by [Your Name].  
Feel free to open issues or submit pull requests.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

