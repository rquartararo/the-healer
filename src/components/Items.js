import React from 'react'
import potion from '../.././images/Red-Potion.png'
import book from '../.././images/Book-3.png'
import crystal from '../.././images/Crystal.png'
import sword from '../.././images/Golden-Sword.png'
import armor from '../.././images/Iron-Armor.png'
import mushroom from '../.././images/Mushroom.png'
import rune from '../.././images/Rune-Stone.png'
import staff from '../.././images/Sapphire-Staff.png'
import sapphire from '../.././images/Sapphire.png'
import hat from '../.././images/Wizard-Hat.png'


class Items extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <img
          className='item1'
          src={this.props.itemsSrc[0]}
          onClick={this.props.pickupItem.bind(this, { potion }, "a healing potion", '0')}
        />
        <img
          className='item2'
          src={this.props.itemsSrc[1]}
          onClick={this.props.pickupItem.bind(this, { book }, "an old book", 1)}
        />
        <img
          className='item3'
          src={this.props.itemsSrc[2]}
          onClick={this.props.pickupItem.bind(this, { crystal }, "a crystal", 2)}
        />
        <img
          className='item4'
          src={this.props.itemsSrc[3]}
          onClick={this.props.pickupItem.bind(this, { sword }, "a golden sword", 3)}
        />
        <img
          className='item5'
          src={this.props.itemsSrc[4]}
          onClick={this.props.pickupItem.bind(this, { armor }, "iron armor", 4)}
        />
        <img
          className='item6'
          src={this.props.itemsSrc[5]}
          onClick={this.props.pickupItem.bind(this, { mushroom }, "a mushroom", 5)}
        />
        <img
          className='item7'
          src={this.props.itemsSrc[6]}
          onClick={this.props.pickupItem.bind(this, { rune }, "a rune stone", 6)}
        />
        <img
          className='item8'
          src={this.props.itemsSrc[7]}
          onClick={this.props.pickupItem.bind(this, { staff }, "a magic staff", 7)}
        />
        <img
          className='item9'
          src={this.props.itemsSrc[8]}
          onClick={this.props.pickupItem.bind(this, { sapphire }, "a sapphire", 8)}
        />
        <img
          className='item10'
          src={this.props.itemsSrc[9]}
          onClick={this.props.pickupItem.bind(this, { hat }, "wizard hat", 9)}
        />
      </div>

    )
  }
}

export default Items;