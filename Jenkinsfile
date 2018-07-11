node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: master"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t homepagefe -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm homepagefe'
    }
    stage('Clean Docker test'){
      sh 'docker rmi homepagefe'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t homepagefe --no-cache .'
        sh 'docker tag homepagefe localhost:5002/homepagefe'
        sh 'docker push localhost:5002/homepagefe'
        sh 'docker rmi -f homepagefe localhost:5002/homepagefe'
      }
    }
  }
  catch (err) {
    throw err
  }
}