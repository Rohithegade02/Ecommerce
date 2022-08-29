import bcrypt from 'bcryptjs';
const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: true
    },
    {
        name:'John Doe',
        email:'john@example.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: false
    },
    {
        name:'Jana Doe',
        email:'Jana@example.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin: false
    },
]

export default users