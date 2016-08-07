Hospitality - a limited functionality hospital reception application written
in NodeJs for Red Hat's OpenShift hackday - August 2016.  

Starting the development server is as simple as `npm run devserve`. If you want
to specify your own env vars, it can be done in the [.env](.env) file. Even if it's not recommended to version the .env, this has been done for showcasing.

OpenShift specifics for deploying the application (buildconfig,
etc.), can be found in the [OpenShift folder](openshift).
