import React from 'react';

const USCurrency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Items extends React.Component {
    render() {
        const { featureHash, feature, selectedOption } = this.props;
        return (
            <div className="summary__option" key={featureHash}>
                <div className='summary__option__label'>{feature}</div>
                <div className='summary__option__value'>{selectedOption.name}</div>
                <div className='summary__option__cost'>
                    {USCurrency.format(selectedOption.cost)}
                </div>
            </div>
        )
    }
}

export default Items;