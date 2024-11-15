export const fadeLeft = {
    initial: {
        x: '-50%',
        opacity: '0%'
    },
    animate: {
        x: '0%',
        opacity: '100%'
    }
}
export const bouncing = {
    initial: {
      opacity: 0
    },
    animate: {
        y: ['-100%', '-5%', '20%', '0%', '10%', '0%'],
        opacity: 1
    }
}

export const leftBouncing = {
    initial: {
        opacity: 0,
    },
    animate:{
        x: ['-500%', '-2%', '2%', '0%'],
        opacity: 1,
    },
}

export const animasiBtnVarians = {
    initial: {
      x: '-500%',
      opacity: 0
    },
    animate: {
      x: '0%',
      opacity: 1,
      scale: [1, 1.15, 1]
    }
  };
  
export const transitionSettings = {
    x: {
      duration: 0.2,
      delay: 0.2,
      type: 'spring'
    },
    scale: {
      delay: 1,
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'mirror'
    }
  };

export const textTransisi = {
    animate: {
        backgroundPosition:  ['0% 50%', '100% 50%', '0% 0%']
    }
}
export const textTransisiSettings = {
    duration:2,
    repeat: Infinity,
    // repeatType: 'reverse',
    ease: 'linear'
}


export const fadeRigth = {
  initial: {
    x: '500%',
    opacity: 0
  },
  animate: {
    x: '0%',
    opacity: 1
  }
}

export const fadeRightSkills = {
  initial: {
    x: '600%',
    opacity: 0
    
  },
  animate: {
    x: '0%',
    opacity: 1,
    y: ['5%', '0%', '3%'],
  }
}


export const infinityLeft = {
  animate: {
    x: ['0%', '60%', '0%', '60%', '0%']
  }
}


