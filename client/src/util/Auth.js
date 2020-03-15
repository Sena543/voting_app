

class Auth {
    authenticate(token){
        localStorage.setItem('auth',JSON.stringify(token));
    }

    signout(){
        localStorage.clear();
    }

    isAuthenticated(){
        const token = localStorage.getItem('auth');
        return token ? true : false;
    }
}

export default new Auth();