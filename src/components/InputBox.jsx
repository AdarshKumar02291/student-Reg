export const InputBox = ({ 
    type = "text", 
    name, 
    label, 
    placeholder = "", 
    value, 
    onChange, 
    required = false, 
    pattern, 
    options = [], 
    rows 
  }) => {
    return (
      <div className="col-md-6">
        <label className="form-label fw-bold">{label}</label>
        {type === "textarea" ? (
          <textarea
            name={name}
            className="form-control form-control-lg"
            placeholder={placeholder}
            rows={rows || 3}
            value={value}
            required={required}
            onChange={onChange}
          />
        ) : type === "select" ? (
          <select
            name={name}
            className="form-select form-select-lg"
            value={value}
            required={required}
            onChange={onChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            className="form-control form-control-lg"
            placeholder={placeholder}
            value={value}
            required={required}
            pattern={pattern}
            onChange={onChange}
          />
        )}
      </div>
    );
  };
  