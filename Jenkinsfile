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
    // stage('Build Docker test'){
    //  sh 'docker build -t homepagefe -f Dockerfile.test --no-cache .'
    // }
    // stage('Docker test'){
    //   sh 'docker run --rm homepagefe'
    //   sh 'q'
    // }
    // stage('Clean Docker test'){
    //   sh 'docker rmi homepagefe'
    // }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        if("$(docker ps -q -f name=homepagefe)" != null)
          if("$(docker ps -aq -f status=exited -f name=homepagefe)" != null)
              sh 'docker rmi -f homepagefe'
          fi
        fi

        if(! "$(docker images -q homepagefe:latest)" != null)
          sh 'docker rm -f homepagefe'          
        fi

        // sh 'docker rmi -f homepagefe:latest'
        // sh 'docker rm -f homepagefe'
        // sh 'docker rmi $(docker images -f "dangling=true" -q)'
        sh 'docker build -t homepagefe --no-cache .'
        sh 'docker run -d -p 9008:9008 --name=homepagefe homepagefe:latest'
        // sh 'docker tag homepagefe localhost:9008/homepagefe'
        // sh 'docker push localhost:9008/homepagefe'
        // sh 'docker rmi -f homepagefe localhost:9008/homepagefe'
      }
    }
  }
  catch (err) {
    throw err
  }
}