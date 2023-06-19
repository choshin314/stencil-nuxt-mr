import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'st-shadowless',
  shadow: false,
})
export class StShadow {
  @Prop() headingText : string
  @Prop() headingTag = 'h3'

  render() {
    const TitleTag = this.headingTag
    return (
      <Host>
        <header>
          <div role="button">
            <span>Some Div</span>
            <TitleTag>
              <span>{this.headingText}</span>
            </TitleTag>
            <span>Another Div</span>
          </div>
        </header>
        <div>
          <p>Paragraph before slot wrapper</p>
          <div>
            <slot/>
          </div>
          <p>Paragraph after slot wrapper</p>
        </div>
      </Host>
    );
  }

}
