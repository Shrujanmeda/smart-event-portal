pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t smarteventportal:v1 .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 5001:5000 smarteventportal:v1 || true'
            }
        }

    }
}