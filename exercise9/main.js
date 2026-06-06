


// Todo App კლასი მოთხოვნები: Todo (id, title, isDone, createdAt), TodoList კლასში მეთოდები: დაამატე, წაშალე(id), მონიშნე შესრულებული checkActiveTodo(id), დააბრუნე Todos(ფილტრი: all/active/done), getAllTodos({active: true}) => actives, getAllTodos({active: true}) => not active, getAllTodos() => all todos. 


class Todo {
    constructor(id, title, isDone, createdAt) {
        this.id = id
        this.title = title
        this.isDone = isDone
        this.createdAt = createdAt
    }
}

class TodoList {
    constructor() {
        this.todos = []
    }

    add(title) {
        const todo = new Todo(
            this.todos.length + 1,
            title,
            false,
            new Date()
        )

        this.todos.push(todo)
    }

    delete(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    checkActiveTodo(id) {
        const todo = this.todos.find(todo => todo.id === id)

        if (todo) {
            todo.isDone = true
        }
    }

    getAllTodos(filter) {
        if (!filter) {
            return this.todos
        }

        if (filter.active === true) {
            return this.todos.filter(todo => todo.isDone === false)
        }

        if (filter.active === false) {
            return this.todos.filter(todo => todo.isDone === true)
        }

        return this.todos
    }
}

const list = new TodoList()

list.add("gamarjoba")
list.add("gamarjoba")
list.add("gamarjoba")

list.checkActiveTodo(2)

console.log(list.getAllTodos()) 
console.log(list.getAllTodos({ active: true })) 
console.log(list.getAllTodos({ active: false }))


// Shoppinc Cart კლასი მეთოდები: addToCart(), removeFromCart(), calculateTotalPrice(), updateItem()

class ShoppingCart {
    constructor() {
        this.items = []
    }

    addToCart(id, name, price, quantity) {
        this.items.push({
            id,
            name,
            price,
            quantity
        })
    }

    removeFromCart(id) {
        this.items = this.items.filter(item => item.id !== id)
    }

    calculateTotalPrice() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
    }

    updateItem(id, newQuantity) {
        const item = this.items.find(item => item.id === id)

        if (item) {
            item.quantity = newQuantity
        }
    }
}

const cart = new ShoppingCart()

cart.addToCart(1, "iPhone", 3000, 1)
cart.addToCart(2, "AirPods", 500, 2)

console.log(cart.items)

cart.updateItem(2, 3)

console.log(cart.items)

console.log('ტოტალ ფასი', cart.calculateTotalPrice())

cart.removeFromCart(1)

console.log(cart.items)

// Library კლასი რომელიც შეინახავს წიგნების მასივს.
//მეთოდები: addBook(), removeBook(), listBooks() ამას შეიძლება გადაეცეს სორტი მაგალითად წამოიღეთ წიგნები გამოშვების წლის მიხედვით.



class Library {
    constructor() {
        this.books = []
    }

    addBook(id, title, author, year) {
        const book = {
            id,
            title,
            author,
            year
        }

        this.books.push(book)
    }

    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id)
    }

    listBooks(sortBy) {
        if (sortBy === "year") {
            return [...this.books].sort((a, b) => a.year - b.year)
        }

        return this.books
    }
}

const library = new Library()

library.addBook(1, "Clean Code", "Robert Martin", 2008)
library.addBook(2, "JavaScript", "John Doe", 2020)
library.addBook(3, "Algorithms", "Jane Smith", 2015)

console.log(library.listBooks()) 

console.log(library.listBooks("year")) //  წლის მიხედვით

library.removeBook(2)

console.log(library.listBooks())

// ContactManager კლასი 
// უნდა ჰქონდეს შემდეგი მეთოდები:
// addNewContact() // სახელი, ნომერი, იმეილი დაადეთ ვალიდაცია რომ 2 ერთი და იგივე იმეილის კონტაქტი ვერ უნდა შექმნათ, ვერც ორი ერთი და იგივე ნომერი
// viewAllContacts(), updatePhone(), deleteContact()

class ContactManager {
    constructor() {
        this.contacts = []
    }

    addNewContact(name, phone, email) {
        const emailExists = this.contacts.some(
            contact => contact.email === email
        )

        const phoneExists = this.contacts.some(
            contact => contact.phone === phone
        )

        if (emailExists) {
            console.log("Email already exists")
            return
        }

        if (phoneExists) {
            console.log("Phone already exists")
            return
        }

        this.contacts.push({
            name,
            phone,
            email
        })
    }

    viewAllContacts() {
        return this.contacts
    }

    updatePhone(email, newPhone) {
        const phoneExists = this.contacts.some(
            contact => contact.phone === newPhone
        )

        if (phoneExists) {
            console.log("Phone already exists")
            return
        }

        const contact = this.contacts.find(
            contact => contact.email === email
        )

        if (contact) {
            contact.phone = newPhone
        }
    }

    deleteContact(email) {
        this.contacts = this.contacts.filter(
            contact => contact.email !== email
        )
    }
}

const manager = new ContactManager()

manager.addNewContact(
    "Levan",
    "555111111",
    "levan@gmail.com"
)

manager.addNewContact(
    "Giorgi",
    "555222222",
    "giorgi@gmail.com"
)

manager.updatePhone(
    "levan@gmail.com",
    "555333333"
)

manager.deleteContact(
    "giorgi@gmail.com"
)

console.log(manager.viewAllContacts())