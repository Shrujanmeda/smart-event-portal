pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Shrujanmeda/smart-event-portal.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t smarteventportal:v1 .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 5001:5000 smarteventportal:v1'
            }
        }

    }
}