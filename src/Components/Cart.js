import React from 'react';
import Items from './Items';
import Total from './Total';

class Cart extends React.Component {
    render() {
        const { selected } = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selected[feature];

            return (
                <Items key={featureHash} featureHash={featureHash} feature={feature} selectedOption={selectedOption} />
            );
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total selected={selected} />
            </section>
        )
    }
}

export default Cart;