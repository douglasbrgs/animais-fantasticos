export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');

  const onMouseMove = {
    handleEvent(event) {
      this.tooltip.style.top = `${event.pageY + 20}px`;
      this.tooltip.style.left = `${event.pageX + 20}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltip.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = element.getAttribute('aria-label');
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  function onMouseOver() {
    // this se refere a elemento com atributo data-tooltip
    const tooltipBox = createTooltipBox(this);

    onMouseMove.tooltip = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltip = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
}
