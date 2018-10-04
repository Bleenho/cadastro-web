import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  itens: Item[] = [
    {nome : "Marmitex pequeno", valor : 7.0, imagePath : "http://redetvshop.com/redimensionados/200x200/normal/imagens/videos_produtos/marmitex-media_ae586790ef5759d856697936fa3aa39a_imagem.jpg" },
    {nome : "Marmitex médio", valor : 10.0, imagePath : "http://www.alimentacaolegal.com.br/wp-content/uploads/2018/01/marmitex-800x526.png" },
    {nome : "Marmitex grande", valor : 12.0, imagePath : "http://cdn.delivoro.com.br/f/public/arquivos/92dff502a/img/prato/16157.jpg" },
    {nome : "Marmitex pequeno", valor : 7.0, imagePath : "http://redetvshop.com/redimensionados/200x200/normal/imagens/videos_produtos/marmitex-media_ae586790ef5759d856697936fa3aa39a_imagem.jpg" },
    {nome : "Marmitex médio", valor : 10.0, imagePath : "http://www.alimentacaolegal.com.br/wp-content/uploads/2018/01/marmitex-800x526.png" },
    {nome : "Marmitex grande", valor : 12.0, imagePath : "http://cdn.delivoro.com.br/f/public/arquivos/92dff502a/img/prato/16157.jpg" },
    {nome : "Marmitex pequeno", valor : 7.0, imagePath : "http://redetvshop.com/redimensionados/200x200/normal/imagens/videos_produtos/marmitex-media_ae586790ef5759d856697936fa3aa39a_imagem.jpg" },
    {nome : "Marmitex médio", valor : 10.0, imagePath : "http://www.alimentacaolegal.com.br/wp-content/uploads/2018/01/marmitex-800x526.png" },
    {nome : "Marmitex grande", valor : 12.0, imagePath : "http://cdn.delivoro.com.br/f/public/arquivos/92dff502a/img/prato/16157.jpg" },
    
  ]

  ngOnInit() {
  }

}
