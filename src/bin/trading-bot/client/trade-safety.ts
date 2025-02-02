import {Component, Input} from '@angular/core';

import * as Models from './models';

@Component({
  selector: 'trade-safety',
  template: `<div div class="tradeSafety">
    <div>
      <div class="param-info"><span class="param-label">Fair Value</span>:<span class="param-value {{ fairValue ? \'text-danger fairvalue\' : \'text-muted\' }}">{{ fairValue.toFixed(product.tickPrice) }}</span></div>
      <div class="param-info"><span class="param-label">BuyPing</span>:<span class="param-value {{ buySizeSafety ? \'text-danger\' : \'text-muted\' }}">{{ buySizeSafety.toFixed(product.tickPrice) }}</span></div>
      <div class="param-info"><span class="param-label">SellPing</span>:<span class="param-value {{ sellSizeSafety ? \'text-danger\' : \'text-muted\' }}">{{ sellSizeSafety.toFixed(product.tickPrice) }}</span></div>
      <div class="param-info"><span class="param-label">BuyTS</span>:<span class="param-value {{ buySafety ? \'text-danger\' : \'text-muted\' }}">{{ buySafety.toFixed(2) }}</span></div>
      <div class="param-info"><span class="param-label">SellTS</span>:<span class="param-value {{ sellSafety ? \'text-danger\' : \'text-muted\' }}">{{ sellSafety.toFixed(2) }}</span></div>
      <div class="param-info"><span class="param-label">TotalTS</span>:<span class="param-value {{ tradeSafetyValue ? \'text-danger\' : \'text-muted\' }}">{{ tradeSafetyValue.toFixed(2) }}</span></div>
      <div class="param-info"><span class="param-label">openOrders/60sec</span>:<span class="param-value {{ tradeFreq ? \'text-danger\' : \'text-muted\' }}">{{ tradeFreq }}</span></div>
    </div>
  </div>`
})
export class TradeSafetyComponent {

  public fairValue: number = 0;
  private buySafety: number = 0;
  private sellSafety: number = 0;
  private buySizeSafety: number = 0;
  private sellSizeSafety: number = 0;
  private tradeSafetyValue: number = 0;

  @Input() tradeFreq: number;

  @Input() product: Models.ProductAdvertisement;

  @Input() set setFairValue(o: Models.FairValue) {
    if (o === null)
      this.fairValue = 0;
    else
      this.fairValue = o.price;
  }

  @Input() set setTradeSafety(o: Models.TradeSafety) {
    if (o === null) {
      this.tradeSafetyValue = 0;
      this.buySafety = 0;
      this.sellSafety = 0;
      this.buySizeSafety = 0;
      this.sellSizeSafety = 0;
    } else {
      this.tradeSafetyValue = o.combined;
      this.buySafety = o.buy;
      this.sellSafety = o.sell;
      this.buySizeSafety = o.buyPing;
      this.sellSizeSafety = o.sellPing;
    }
  }
}
