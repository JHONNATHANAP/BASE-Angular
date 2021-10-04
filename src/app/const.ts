import { environment } from "@src/environments/environment"

export const routesPath = {
    loggedin: {
        path: 'in',
        exampleList: 'examplelist',
        exampleForm: 'example-form',
        userProfiles: 'profiles',
        toDoMailbox: 'todomailbox'
    },
    loggedout: {
        path: 'out',
        login: 'login'
    },
    demo: {
        path: 'demo',
        shared: 'shared',
        controls: 'controls',
        tables: 'tables'
    },
    static: {
        path: 'static',
    }
}

export const apiUrls = {
    api: environment.url,
    login: "/login"
}

export const menuOptions = [
 
    {
        name: 'Perfiles',
        path: `./${routesPath.loggedin.userProfiles}`,
        icon: { class: 'material-icons-outlined icons', name: 'people_outline' }
    },
    {
        name: 'Buzón',
        path: `./${routesPath.loggedin.toDoMailbox}`,
        icon: { class: 'material-icons-outlined icons', name: 'drafts' }
    },
    {
        name: 'login',
        path: `../${routesPath.loggedout.path}/${routesPath.loggedout.login}`,
        icon: { class: 'material-icons', name: 'login' }
    }
]
