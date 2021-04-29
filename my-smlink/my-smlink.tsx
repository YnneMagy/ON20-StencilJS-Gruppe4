import { Component, Host, h, Prop, } from '@stencil/core';

@Component({
  tag: 'my-smlink',
  styleUrl: 'my-smlink.css',
  shadow: true,
})
export class MySmlink {

  @Prop() text : string;
  @Prop() aussehen: string;
  @Prop() background: any;
  

  componentDidLoad() {}
 
  render() {
    return (
      <Host>
      <button class={'btn {$ this.aussehen}'} type="button"> 
      <img src="/src/icons/instagram.png"> </img> 
      </button>
      </Host>

    )}
    
  
}
