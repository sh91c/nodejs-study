// Callback HELL Callback HELL Callback HELL Callback HELL Callback HELL Callback HELL
class UserStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (
					(id === "sh" && password === "1234") ||
					(id === "coder" && password === "1234")) {
					resolve(id);
				} else {
					reject(new Error("User NOT found."));
				}
		}, 2000);
		});
	}

	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			if (user === "sh") {
				resolve({ name: "sh", role: "admin" });
			} else {
				reject(new Error("no accees"));
			}
		}, 1000);
		});
	}
}

const userStorage = new UserStorage();
const id = prompt("enter your ID");
const password = prompt("enter your PASSWORD");
userStorage.loginUser(id, password)
	.then(userStorage.getRoles)
	.then(user => alert(`Hello ${user.name}, you have a ${user.role} role.`))
	.catch(alert);