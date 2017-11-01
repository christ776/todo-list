import React from 'react';

const Title = () =>
   (
     <div style={styles.header}>
       <div style={styles.title}> Todo - List </div>
     </div>
  );

export default Title;

const styles = {
  header: {
    backgroundColor: 'skyblue',
    padding: 15,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    font: '18px system-ui',
  },
};
