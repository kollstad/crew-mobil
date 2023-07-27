const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-gray-700 text-center text-lg`}
        {...props}>
        {children}
    </label>
)

export default Label
