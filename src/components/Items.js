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
          className='item'
          src={this.props.itemsSrc[0]}
          styles={{ position: 'relative', top: '100', left: '100' }}
          onClick={this.props.pickupItem.bind(this, { potion }, "a healing potion", '0')}
        />
        <img
          className='item'
          src={this.props.itemsSrc[1]}
          styles={{ position: 'relative', top: '100', left: '200' }}
          onClick={this.props.pickupItem.bind(this, { book }, "an old book", 1)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[2]}
          styles={{ position: 'relative', top: '100', left: '300' }}
          onClick={this.props.pickupItem.bind(this, { crystal }, "a crystal", 2)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[3]}
          styles={{ position: 'relative', top: '100', left: '400' }}
          onClick={this.props.pickupItem.bind(this, { sword }, "a golden sword", 3)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[4]}
          styles={{ position: 'relative', top: '100', left: '500' }}
          onClick={this.props.pickupItem.bind(this, { armor }, "iron armor", 4)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[5]}
          styles={{ position: 'relative', top: '100', left: '600' }}
          onClick={this.props.pickupItem.bind(this, { mushroom }, "a mushroom", 5)}
        />
        <img

          src={this.props.itemsSrc[6]}
          styles={{ position: 'relative', top: '100', left: '700' }}
          onClick={this.props.pickupItem.bind(this, { rune }, "a rune stone", 6)}
        />
        <img

          src={this.props.itemsSrc[7]}
          styles={{ position: 'relative', top: '100', left: '800' }}
          onClick={this.props.pickupItem.bind(this, { staff }, "a magic staff", 7)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[8]}
          styles={{ position: 'relative', top: '100', left: '900' }}
          onClick={this.props.pickupItem.bind(this, { sapphire }, "a sapphire", 8)}
        />
        <img
          className='item'
          src={this.props.itemsSrc[9]}
          styles={{ position: 'relative', top: '100', left: '1000' }}
          onClick={this.props.pickupItem.bind(this, { hat }, "wizard hat", 9)}
        />
      </div>

    )
  }
}

export default Items;