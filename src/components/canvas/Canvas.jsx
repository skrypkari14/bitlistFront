import {React, useRef, useEffect} from 'react'

const Canvas = props => {
    const ref = useRef();

    function drawRoundedRect(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();

      
    }

    useEffect(()=> {
      const canvas = ref.current
      const ctx = canvas.getContext('2d')
      const grd = ctx.createLinearGradient(0, 0, 180, 0);
      grd.addColorStop(0, '#1B2531');
      grd.addColorStop(1, '#1C242C');
      ctx.fillStyle = grd;
      drawRoundedRect(ctx, 0, 0, 640, 283, 20);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(70, 0); // Start point (x1, y1)
      ctx.lineTo(70, 283); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(70, 224); // Start point (x1, y1)
      ctx.lineTo(640, 224); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(70, 176); // Start point (x1, y1)
      ctx.lineTo(640, 176); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(70, 129); // Start point (x1, y1)
      ctx.lineTo(640, 129); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(70, 82); // Start point (x1, y1)
      ctx.lineTo(640, 82); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(70, 35); // Start point (x1, y1)
      ctx.lineTo(640, 35); // End point (x2, y2)
      ctx.strokeStyle = '#2C3B4C'; // Line color
      ctx.lineWidth = 2; // Line width
      ctx.stroke();

      ctx.font = '12px Inter';
      ctx.fillStyle = '#9BB5CE'; // Text color
      ctx.textAlign = 'center'; // Text alignment
      ctx.textBaseline = 'middle'; // Text baseline

      ctx.fillText('$ 3.0m', 30, 30);
      ctx.fillText('$ 2.5m', 30, 80);
      ctx.fillText('$ 2.0m', 30, 125);
      ctx.fillText('$ 1.5m', 30, 172);
      ctx.fillText('$ 1.0m', 30, 219);

      ctx.fillText('Jun', 97, 239);
      ctx.fillText('Jul', 159, 239);
      ctx.fillText('Aug', 216, 239);
      ctx.fillText('Sep', 276, 239);
      ctx.fillText('Oct', 337, 239);
      ctx.fillText('Nov', 396, 239);
      ctx.fillText('Dec', 456, 239);
      ctx.fillText('Jan', 518, 239);
      ctx.fillText('Feb', 580, 239);

      ctx.fillText('2019', 97, 257);
      ctx.fillText('2019', 159, 257);
      ctx.fillText('2019', 216, 257);
      ctx.fillText('2019', 276, 257);
      ctx.fillText('2019', 337, 257);
      ctx.fillText('2019', 396, 257);
      ctx.fillText('2019', 456, 257);
      ctx.fillText('2020', 518, 257);
      ctx.fillText('2020', 580, 257);

      ctx.shadowColor = 'rgba(255, 255, 255, 0.25)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(84, 44, 28, 10); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(84, 56, 28, 17); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(84, 75, 28, 45); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(84, 122, 28, 20); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(84, 144, 28, 80); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(146, 93, 28, 15  ); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(146, 110, 28, 6); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(146, 118, 28, 28); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(146, 148, 28, 14); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(146, 164, 28, 60); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(202, 67, 28, 25); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(202, 94, 28, 12); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(202, 108, 28, 38); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(202, 148, 28, 37); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(202, 187, 28, 37); 
      

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(262, 24, 28, 37); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(262, 63, 28, 14); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(262, 79, 28, 50); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(262, 131, 28, 36); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(262, 169, 28, 55); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(324, 49, 28, 12); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(324, 63, 28, 29); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(324, 94, 28, 35); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(324, 131, 28, 15); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(324, 148, 28, 76); 

      // Who read this is GOMOSEC

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(382, 44, 28, 10); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(382, 56, 28, 17); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(382, 75, 28, 45); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(382, 122, 28, 20); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(382, 144, 28, 80); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(442, 72, 28, 23); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(442, 97, 28, 9); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(442, 108, 28, 38); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(442, 148, 28, 21); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(442, 171, 28, 53); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(505, 49, 28, 12); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(505, 63, 28, 29); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(505, 94, 28, 35); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(505, 131, 28, 15); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(505, 148, 28, 76); 

      // 

      ctx.fillStyle = '#5FFA9D';
      ctx.fillRect(567, 67, 28, 25); 

      ctx.fillStyle = '#745FFA';
      ctx.fillRect(567, 94, 28, 12); 

      ctx.fillStyle = '#57677E';
      ctx.fillRect(567, 108, 28, 38); 

      ctx.fillStyle = '#FAD85F';
      ctx.fillRect(567, 148, 28, 37); 

      ctx.fillStyle = '#5FB1FA';
      ctx.fillRect(567, 187, 28, 37); 
      
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

    }, [])

  return <canvas ref={ref} {...props}/>
}

export default Canvas