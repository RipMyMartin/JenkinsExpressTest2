pipeline {
    agent any

    stages {
        stage('Create Text File') {
            steps {
                sh 'touch testfile.txt'
            }
        }
        stage('Write to Text File') {
            steps {
                sh "echo 'See on testfail' > testfile.txt"
            }
        }
        stage('Display File Content') {
            steps {
                sh 'cat testfile.txt'
            }
        }
        stage('Show Name') {
            steps {
                echo 'Minu nimi on Martin'
            }
        }
    }
}
