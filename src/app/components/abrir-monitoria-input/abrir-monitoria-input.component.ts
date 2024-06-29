import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text";

@Component({
  selector: 'app-abrir-monitoria-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AbrirMonitoriaInputComponent),
    multi: true
  }],
  templateUrl: './abrir-monitoria-input.component.html',
  styleUrl: './abrir-monitoria-input.component.scss'
})
export class AbrirMonitoriaInputComponent implements ControlValueAccessor {
  @Input() titleName: string = "";
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  
  value: string = "";
  
  onChange: any = () => {}
  onTouched: any = () => {}
  
  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.onChange(value);
  }
  
  writeValue(value: any): void {
    this.value = value;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}
