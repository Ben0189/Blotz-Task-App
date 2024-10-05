using FluentValidation;


namespace BlotzTask.Models.Validators
{
    public class SampleValidationValidator
        : AbstractValidator<SampleValidationDTO>
{
    public SampleValidationValidator()
        {
            RuleFor(x => x.Title).NotEmpty().MinimumLength(3).MaximumLength(10).WithMessage("Title should be between 3-10 character");

        }
    }
}
