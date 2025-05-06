pipeline {
    agent any

    stages {
        stage('Create Text File') {
            steps {
                echo 'See on testfail' > testfile.txt
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
