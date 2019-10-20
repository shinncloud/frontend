import { Component, OnInit } from '@angular/core';
import { HealthService } from './health.service';
import { Health } from './health';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  health: Observable<Health>;

  constructor(private healthService: HealthService) { }

  ngOnInit() {
    this.refreshHealth()
  }

  refreshHealth() {
    this.health = this.healthService.getHealth()
  }

}
