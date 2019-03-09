import React from 'react';
import { Button, Row, Col, Card } from 'react-materialize';


const FAB = ({isAdmin, onClick, openCategoryModal, openDishModal}) => (
  <div className="hide-on-med-and-up">
    { isAdmin
      ?  <Button
          floating fab='vertical'
          style={styles.FAB}
          onClick={onClick}
          large className='red'
          waves='light'
          icon='add'>
            <Button floating
              className='red'
              icon="playlist_add"
              onClick={openCategoryModal} />
            <Button floating
              className='red'
              icon="library_add"
              onClick={openDishModal} />
            <Button floating
              icon='format_align_justify'
              className='orange darken-1'
              onClick={onClick} />
          </Button>
      : <Button
          style={styles.FAB}
          onClick={onClick}
          large className='red'
          waves='light'
          icon='add' />
    }
  </div>
);

const styles = {
  FAB: {
    textAlign: 'center',
    padding: 1,
    borderRadius: '50%',
    height: 55,
    width: 55,
    position: 'fixed',
    right: 20,
    bottom: 30
  }
}
export default FAB;
