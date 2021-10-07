import { environment } from "@src/environments/environment"

export const routesPath = {
    loggedin: {
        path: 'in',
        exampleList: 'examplelist',
        exampleForm: 'example-form',
        userProfiles: 'profiles',
        toDoMailbox: 'todomailbox',
        newDocument:'newdocument',
        newRequirement:'newrequirement',
        detailRequest:"detailrequest",
        myData:"mydata",
        recentlyVisited:"recentlyvisited",
        newDetail:"newdetail",
        detailRequirement:'detailrequirement'
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
        name: 'Ingreso Documento',
        path: `./${routesPath.loggedin.newDocument}`,
        icon: { class: 'material-icons-outlined icons', name: 'article' }
    },
    {
        name: 'Ingreso Requerimiento',
        path: `./${routesPath.loggedin.newRequirement}`,
        icon: { class: 'material-icons-outlined icons', name: 'edit' }
    },
    {
        name: 'Detalle de Solicitud',
        path: `./${routesPath.loggedin.detailRequest}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment' }
    },   
    {
        name: 'Mis datos',
        path: `./${routesPath.loggedin.myData}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment_ind' }
    },
    {
        name: 'Visitados Recientemente',
        path: `./${routesPath.loggedin.recentlyVisited}`,
        icon: { class: 'material-icons-outlined icons', name: 'visibility' }
    },
    {
        name: 'Ingreso Detalle',
        path: `./${routesPath.loggedin.newDetail}`,
        icon: { class: 'material-icons-outlined icons', name: 'open_in_new' }
    },
    {
        name: 'Detalle de Requerimiento',
        path: `./${routesPath.loggedin.detailRequirement}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment' }
    },
    {
        name: 'login',
        path: `../${routesPath.loggedout.path}/${routesPath.loggedout.login}`,
        icon: { class: 'material-icons', name: 'login' }
    }
]
