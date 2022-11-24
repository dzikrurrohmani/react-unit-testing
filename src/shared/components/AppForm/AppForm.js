import './AppForm.css';

export default function AppForm({
  name,
  type = 'text',
  value,
  label,
  placeholder,
  onChange,
}) {
  const warnCheck = type === 'number' ? Number(value) > 0 : value;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <label style={{ textAlign: 'left' }}>{label}</label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {warnCheck ? (
        <h4 style={{ color: 'green', fontSize: '22px' }}>✓</h4>
      ) : (
        <p style={{ color: 'red', fontSize: '12px' }}>this field is required</p>
      )}
    </div>
  );
}
