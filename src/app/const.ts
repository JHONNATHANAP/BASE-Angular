import { environment } from "@src/environments/environment"

export const routesPath = {
    loggedin: {
        path: 'in',
        exampleList: 'examplelist',
        exampleForm: 'example-form',
        userProfiles: 'profiles',
        toDoMailbox: 'todomailbox',
        newDocument: 'newdocument',
        newRequirement: 'newrequirement',
        detailRequest: "detailrequest",
        myData: "mydata",
        recentlyVisited: "recentlyvisited",
        newDetail: "newdetail",
        detailRequirement: 'detailrequirement',
        myshares:"myshares",
        mydocuments:"mydocuments",
        documentswithresponsetime:"documentswithresponsetime",
        documentssearch:"documentssearch",
        inbox:"inbox",
        outbox:"outbox"
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
    login: "/login",
    documentos:"/documentos",
    tiposDocumentos:"tipos-documentos"
}

export const dummyOptions = [
    { id: 1, title: "Validación" },
    { id: 2, title: "Visación" },
    { id: 3, title: "Aprobación" },
    { id: 4, title: "Recepción" },
    { id: 5, title: "Gestor" },
    { id: 6, title: "Pago" },
]

export const views = [

    {
        title: 'Perfiles',
        path: `./${routesPath.loggedin.userProfiles}`,
        icon: { class: 'material-icons-outlined icons', name: 'people_outline' },
        view: 'profiles'
    },
    {
        title: 'Buzón de tareas pendientes',
        path: `./${routesPath.loggedin.toDoMailbox}`,
        icon: { class: 'material-icons-outlined icons', name: 'drafts' },
        view: 'todomailbox'
    },
    {
        title: 'Ingreso Documento',
        path: `./${routesPath.loggedin.newDocument}`,
        icon: { class: 'material-icons-outlined icons', name: 'article' },
        view: 'newdocument'
    },
    {
        title: 'Ingreso Requerimiento',
        path: `./${routesPath.loggedin.newRequirement}`,
        icon: { class: 'material-icons-outlined icons', name: 'edit' },
        view: 'newrequirement'
    },
    {
        title: 'Detalle de Solicitud',
        path: `./${routesPath.loggedin.detailRequest}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment' },
        view: 'detailrequest'
    },
    {
        title: 'Mis datos',
        path: `./${routesPath.loggedin.myData}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment_ind' },
        view: 'mydata'
    },
    {
        title: 'Visitados Recientemente',
        path: `./${routesPath.loggedin.recentlyVisited}`,
        icon: { class: 'material-icons-outlined icons', name: 'visibility' },
        view: 'recentlyvisited'
    },
    {
        title: 'Ingreso Detalle',
        path: `./${routesPath.loggedin.newDetail}`,
        icon: { class: 'material-icons-outlined icons', name: 'open_in_new' },
        view: 'newdetail'
    },
    {
        title: 'Detalle de Requerimiento',
        path: `./${routesPath.loggedin.detailRequirement}`,
        icon: { class: 'material-icons-outlined icons', name: 'assignment' },
        view: 'detailrequirement'
    },
    {
        title: 'Mis Participaciones',
        path: `./${routesPath.loggedin.myshares}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'myshares'
    },
    {
        title: 'Mis Documentos',
        path: `./${routesPath.loggedin.mydocuments}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'mydocuments'
    },
    {
        title: 'Documentos con Plazo de Respuesta',
        path: `./${routesPath.loggedin.documentswithresponsetime}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'documentswithresponsetime'
    },
    {
        title: 'Búsqueda de Documentos',
        path: `./${routesPath.loggedin.documentssearch}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'documentssearch'
    },
    {
        title: 'Bandeja de Entrada Oficina Partes',
        path: `./${routesPath.loggedin.inbox}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'inbox'
    },
    {
        title: 'Bandeja de Salida Oficina Partes',
        path: `./${routesPath.loggedin.outbox}`,
        icon: { class: 'material-icons-outlined icons', name: 'view_list' },
        view: 'outbox'
    },
    {
        title: 'login',
        path: `../${routesPath.loggedout.path}/${routesPath.loggedout.login}`,
        icon: { class: 'material-icons-outlined icons', name: 'login' },
        view: 'login'
    }
]
