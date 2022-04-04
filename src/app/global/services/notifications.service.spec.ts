import { NotificationsService } from './notifications.service';
import { TestBed } from '@angular/core/testing';
import swal from 'sweetalert2';

describe('NotificationsService', () => {
  let swalSpy;
  let service: NotificationsService;

  beforeEach(() => {
    service = TestBed.get(NotificationsService);
  });

  it('should call fire when call showNotification', () => {
    swalSpy = spyOn(swal, 'fire');
    service.showNotification('test', 'test');
    expect(swalSpy).toHaveBeenCalled();
  });

  it('should call fire when call showNotification with danger type', () => {
    swalSpy = spyOn(swal, 'fire');
    service.showNotification('danger', 'test');
    expect(swalSpy).toHaveBeenCalled();
  });
});
